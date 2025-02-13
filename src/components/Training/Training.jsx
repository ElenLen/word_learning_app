import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Training.module.css'

const Training = () => {
  // words для хранения списка слов.
  const [words, setWords] = useState([]);
  // currentIndex для отслеживания текущего слова.
  const [currentIndex, setCurrentIndex] = useState(0);
  let curIndex = 0;
  // options для хранения вариантов перевода.
  const [options, setOptions] = useState([]);
  // selected для отслеживания выбранного варианта.
  const [selected, setSelected] = useState(null);
  const [wordsLearned, setWordsLearned] = useState(0); // Для подсчета изученных слов


  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
        setWords(response.data);
        setNextOptions(response.data);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };
    fetchWords();
  }, []);

  const setNextOptions = (words) => {
    // корректное слово
    const correctWord = words[curIndex];
    // другое слово, кроме заданного
    const otherWords = words.filter((_, index) => index !== curIndex);
    // заданное и 2 случайных
    const randomOptions = [correctWord, ...otherWords.sort(() => 0.5 - Math.random()).slice(0, 2)];
    // console.log(randomOptions);
    setOptions(randomOptions.sort(() => 0.5 - Math.random()));
  };

  // handleNext для переключения к следующему слову и сброса состояния выбранного варианта.
  const handleNext = () => {
    setSelected(null);
    curIndex = (currentIndex + 1) % words.length;
    setCurrentIndex((currentIndex + 1) % words.length);
    setNextOptions(words);
  };

  // handleSelect для отслеживания выбранного варианта и изменения цвета кнопки в зависимости от правильности ответа.
  const handleSelect = (option) => {
    setSelected(option);
  };

  // подсчет изученных
  const countWords = () => {
    let learnedWords = wordsLearned;

    if (learnedWords !== words.length) {
      setWordsLearned(learnedWords + 1);
    } else {
      setWordsLearned(words.length);
    }
  };

  if (words.length === 0) return <div>Загрузка...</div>;

  const currentWord = words[currentIndex];

  return (
    <div>
      <h1 className={styles.h1}>Выберите верный перевод слова</h1>
      <div className={styles.flashCard}>
        <button onClick={handleNext} className={styles.buttonCard}>
          <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="40" height="40">
            <path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Zm8.879,5.707a1,1,0,0,0,0-1.414L7.587,13,18,12.993a1,1,0,0,0,0-2L7.586,11l3.293-3.293A1,1,0,1,0,9.49,6.269l-.025.024L5.879,9.878a3,3,0,0,0,0,4.243h0l3.586,3.586A1,1,0,0,0,10.879,17.707Z" />
          </svg>
          {/* Влево */}
        </button>
        <div className={styles.Card}>
          <h2>{currentWord.english}</h2>
          {options.map((option, index) => (
            <button className={styles.btnCard}
              key={index}
              onClick={() => {
                handleSelect(option);
                if (option.russian === currentWord.russian) { setWordsLearned(countWords) }

              }}
              style={{
                backgroundColor: selected
                  ? option.russian === currentWord.russian
                    ? 'limegreen'
                    : 'lightcoral'
                  : 'initial',
              }}

            >
              {option.russian}
            </button>
          ))}
        </div>
        <button onClick={handleNext} className={styles.buttonCard}>
          <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="40" height="40">
            <path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12ZM13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.389,1.438l.025-.024,3.586-3.585a3,3,0,0,0,0-4.243h0L14.535,6.293A1,1,0,0,0,13.121,6.293Z" />
          </svg>
          {/* Вправо */}
        </button>
      </div>
      <h3 className={styles.h3}>Изучено слов: {wordsLearned}/{words.length}</h3>
    </div>
  );
};

export default Training;