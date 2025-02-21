import { useState, useContext } from 'react';
import WordsContext from './WordsContext';
import styles from './WordList.module.css'

const WordList = () => {
  const { words, setWords, newWord, setNewWord, addWord, updateWord, deleteWord } = useContext(WordsContext);
  const [editingIndex, setEditingIndex] = useState(null);

  // Функция handleEdit устанавливает индекс редактируемой строки в состояние компонента state.editingIndex
  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  // // закрыть редактировниание
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  // Функция handleSave выполняет POST запрос к API для сохранения изменений слова. Она отправляет обновленные данные слова на сервер и после успешного сохранения обновляет состояние компонента
  const handleSave = (index) => {
    const word = words[index];
    updateWord(word);
    setEditingIndex(null);
  };

  // Функция handleChange обновляет значения в состоянии компонента при изменении данных в полях ввода. Она обрабатывает как изменение существующих слов, так и ввод нового слова
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const updatedWords = words.map((word, i) =>
        i === index ? { ...word, [name]: value } : word
      );
      setWords(updatedWords);
    } else {
      setNewWord({ ...newWord, [name]: value });
    }
  };

  // загрузка
  if (words.length === 0) {
    return (
      <div className={styles.loadNew}>
        Загрузка...

        <div className={styles.overlayLoader}>
          <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>
    )
  };

  return (
    <div>
      <h1 className={styles.h1}>Список английских слов для изучения</h1>

      <table className={styles.table} >
        <thead >
          <tr>
            <th>(id)</th>
            <th>Слово на английском</th>
            <th>Транскрипция</th>
            <th>Перевод на русском</th>
            <th>Тема слова</th>
            {/* <th>(tags_json)</th> */}
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <tr key={word.id}>
              <td>{word.id}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="english"
                    value={word.english}
                    onChange={(e) => handleChange(e, index)}
                    className={!word.english ? styles.error : ''}
                  />
                ) : (
                  word.english
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="transcription"
                    value={word.transcription}
                    onChange={(e) => handleChange(e, index)}
                    className={!word.transcription ? styles.error : ''}
                  />
                ) : (
                  word.transcription
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="russian"
                    value={word.russian}
                    onChange={(e) => handleChange(e, index)}
                    className={!word.russian ? styles.error : ''}
                  />
                ) : (
                  word.russian
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="tags"
                    value={word.tags}
                    onChange={(e) => handleChange(e, index)}
                    className={!word.tags ? styles.error : ''}
                  />
                ) : (
                  word.tags
                )}
              </td>
              {/* <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="tags_json"
                    value={word.tags_json}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  word.tags_json
                )}
              </td> */}

              <td>
                {editingIndex === index ? (
                  <button onClick={() => handleSave(index)}
                    disabled={!word.english || !word.transcription || !word.russian || !word.tags}
                    title={(!word.english || !word.transcription || !word.russian || !word.tags) ? "Заполните все поля" : "Сохранить"}
                    className={(!word.english || !word.transcription || !word.russian || !word.tags) ? styles.btnDis : ''}
                  ><svg
                    className={(!word.english || !word.transcription || !word.russian || !word.tags) ? styles.svgDis : ''}
                    fill="rgb(87, 87, 87)"
                    xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20" >
                      <path d="m8,19h-3c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3v4c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-3.172l2.711,2.734c.187.188.289.438.289.704v1.734c0,.552.447,1,1,1s1-.448,1-1v-1.734c0-.797-.31-1.548-.87-2.112l-3.236-3.265C16.468.459,15.576.004,14.914.004c-.05-.003-9.914-.004-9.914-.004C2.243,0,0,2.243,0,5v11c0,2.757,2.243,5,5,5h3c.553,0,1-.448,1-1s-.447-1-1-1Zm-1-13V2h7v4h-7Zm3.5,11c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5c0,.552-.447,1-1,1s-1-.448-1-1c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5.673,1.5,1.5,1.5c.553,0,1,.448,1,1s-.447,1-1,1Zm12.621-5.121c-1.17-1.17-3.072-1.17-4.242,0l-6.707,6.707c-.756.755-1.172,1.76-1.172,2.828v1.586c0,.552.447,1,1,1h1.586c1.068,0,2.073-.417,2.828-1.172l6.707-6.707c.566-.567.879-1.32.879-2.122s-.313-1.555-.879-2.121Zm-1.414,2.828l-6.707,6.707c-.378.378-.88.586-1.414.586h-.586v-.586c0-.526.214-1.042.586-1.414l6.707-6.707c.391-.39,1.023-.39,1.414,0,.189.188.293.439.293.707s-.104.518-.293.707Z" />
                      <path fill="none" />
                    </svg>
                    {/* Сохранить */}
                  </button>
                ) : (
                  <button onClick={() => handleEdit(index)}
                    title="Редактировать"
                  ><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
                      <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                    </svg>
                    {/* Редактировать */}
                  </button>
                )}

                {editingIndex === index ? (
                  <button
                    onClick={() => handleCancelEdit()}
                    title="Отмена">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                      <path d="m19.707,15.707l-1.293,1.293,1.293,1.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293-1.293,1.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.293-1.293-1.293-1.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.293,1.293,1.293-1.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm4.293,1.293c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-12,6c0,.553-.447,1-1,1h-4c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h4.515c1.869,0,3.627.728,4.95,2.05l2.501,2.502c.892.89,1.525,1.997,1.833,3.2.076.299.011.617-.179.861s-.481.387-.79.387h-5.116c-1.496,0-2.714-1.218-2.714-2.714V2.023c-.16-.015-.322-.023-.485-.023h-4.515c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h4c.553,0,1,.447,1,1Zm2-16.714c0,.394.32.714.714.714h3.635c-.217-.374-.484-.722-.797-1.033l-2.501-2.502c-.318-.318-.671-.587-1.051-.805v3.626Z" />
                    </svg>
                    {/* Отмена */}
                  </button>
                ) : (
                  <button onClick={() => deleteWord(word.id)}
                    title="Удалить">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
                      <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
                      <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                    </svg>
                    {/* Удалить */}
                  </button>
                )}
              </td>
            </tr>
          ))}
          <tr className={styles.newLine}>
            <td>Новое слово</td>
            <td>
              <input
                type="text"
                name="english"
                value={newWord.english}
                onChange={(e) => handleChange(e)}
                className={!newWord.english ? styles.error : ''}
              />
            </td>
            <td>
              <input
                type="text"
                name="transcription"
                value={newWord.transcription}
                onChange={(e) => handleChange(e)}
                className={!newWord.transcription ? styles.error : ''}
              />
            </td>
            <td>
              <input
                type="text"
                name="russian"
                value={newWord.russian}
                onChange={(e) => handleChange(e)}
                className={!newWord.russian ? styles.error : ''}
              />
            </td>
            <td>
              <input
                type="text"
                name="tags"
                value={newWord.tags}
                onChange={(e) => handleChange(e)}
                className={!newWord.tags ? styles.error : ''}
              />
            </td>
            <td>
              <button onClick={addWord}
                disabled={!newWord.english || !newWord.transcription || !newWord.russian || !newWord.tags}
                title={(!newWord.english || !newWord.transcription || !newWord.russian || !newWord.tags) ? "Заполните все поля" : "Добавить"}
                className={(!newWord.english || !newWord.transcription || !newWord.russian || !newWord.tags) ? styles.btnDisNew : styles.newLine}
              >
                Добавить
                <svg
                  className={(!newWord.english || !newWord.transcription || !newWord.russian || !newWord.tags) ? styles.svgDis : ''}
                  fill="rgb(87, 87, 87)"
                  id="Layer_1" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m16 16a1 1 0 0 1 -1 1h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zm6-5.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" />
                  <path fill="none" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div >
  );
};

export default WordList;