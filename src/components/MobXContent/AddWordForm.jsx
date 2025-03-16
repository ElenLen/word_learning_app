import { useState } from "react";
import { observer } from "mobx-react";
import styles from './AddWordForm.module.css'

const AddWordForm = observer((props) => {
  const { onSubmit } = props;
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWord = { english, transcription, russian, tags };
    onSubmit(newWord);
    setEnglish("");
    setTranscription("");
    setRussian("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.AddForm}>
      <input
        type="text"
        value={english}
        onChange={(event) => setEnglish(event.target.value)}
        placeholder="Слово"
      />
      <input
        type="text"
        value={transcription}
        onChange={(event) => setTranscription(event.target.value)}
        placeholder="Транскрипция"
      />
      <input
        type="text"
        value={russian}
        onChange={(event) => setRussian(event.target.value)}
        placeholder="Перевод"
      />
      <input
        type="text"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
        placeholder="Тема слова"
      />
      <button type="submit"
        title="Добавить">
        Добавить
      </button>
    </form>
  );
});

export default AddWordForm;
