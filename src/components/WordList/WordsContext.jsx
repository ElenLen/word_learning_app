import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState({
    english: '',
    transcription: '',
    russian: '',
    tags: ''
  });

  useEffect(() => {
    fetchWords();
  }, []);

  // Функция fetchWords выполняет GET запрос к API для получения списка слов и сохраняет их в состояние компонента state.words.
  const fetchWords = async () => {
    try {
      const response = await axios.get('/api/words');
      setWords(response.data);
    } catch (error) {
      console.error('Ошибка писка слова:', error);
    }
  };

  // Функция addWord выполняет POST запрос к API для добавления нового слова. Она отправляет данные нового слова на сервер и после успешного добавления обновляет состояние компонента и сбрасывает форму ввода
  const addWord = async () => {
    try {
      await axios.post('/api/words/add', newWord);
      setNewWord({ english: '', transcription: '', russian: '', tags: '' });
      fetchWords();
    } catch (error) {
      console.error('Ошибка добавления слова:', error);
    }
  };

  // Функция updateWord выполняет POST запрос к API для сохранения изменений слова. Она отправляет обновленные данные слова на сервер и после успешного сохранения обновляет состояние компонента
  const updateWord = async (updatedWord) => {
    try {
      await axios.post(`/api/words/${updatedWord.id}/update`, updatedWord);
      fetchWords();
    } catch (error) {
      console.error('Ошибка обновления слова:', error);
    }
  };

  // Функция deleteWord выполняет POST запрос к API для удаления слова. Она отправляет запрос на удаление слова с указанным id и после успешного удаления обновляет состояние компонента
  const deleteWord = async (id) => {
    try {
      await axios.post(`/api/words/${id}/delete`);
      fetchWords();
    } catch (error) {
      console.error('Ошибка удаления слова:', error);
    }
  };

  return (
    <WordsContext.Provider value={{ words, setWords, newWord, setNewWord, addWord, updateWord, deleteWord }}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;