import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Flashcards.module.css'
// import NoMatch from '../NoMatch/NoMatch'


const Flashcards = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);//показать перевод
  const [wordsLearned, setWordsLearned] = useState(0); // Для подсчета изученных слов

  useEffect(() => {
    const fetchWords = async () => {
      const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
      setWords(response.data);
    };
    fetchWords();
  }, []);

  // следующая карточка
  const handleNext = () => {
    setShowTranslation(false);//перевод скрыт
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  // предыдущая карточка
  const handlePrevious = () => {
    setShowTranslation(false);//перевод скрыт
    setCurrentIndex((currentIndex - 1 + words.length) % words.length);
  };

  if (words.length === 0) {
    return (
      <div>
        Загрузка...
        {/* <NoMatch /> */}
      </div>
    )
  };

  const currentWord = words[currentIndex];

  return (
    <div>
      <h1 className={styles.h1}>Проверьте себя открыв перевод слова</h1>

      <div className={styles.flashCard}>
        <button onClick={handlePrevious} className={styles.buttonCard}>
          <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="40" height="40">
            <path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Zm8.879,5.707a1,1,0,0,0,0-1.414L7.587,13,18,12.993a1,1,0,0,0,0-2L7.586,11l3.293-3.293A1,1,0,1,0,9.49,6.269l-.025.024L5.879,9.878a3,3,0,0,0,0,4.243h0l3.586,3.586A1,1,0,0,0,10.879,17.707Z" />
          </svg>
          {/* Влево */}
        </button>
        <div className={styles.Card}>
          <h2>{currentWord.english}</h2>
          <p>{currentWord.transcription}</p>
          {showTranslation
            ? (
              <p>{currentWord.russian}</p>
            )
            : (
              <button className={styles.cardRusBtn} onClick={() => {
                setShowTranslation(true);
                // увеличиваем счетчик изученных слов
                setWordsLearned((prevCount) => prevCount + 1);
              }}>Показать перевод</button>
            )}
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

export default Flashcards;