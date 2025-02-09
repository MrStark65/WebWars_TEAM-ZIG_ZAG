import { useState } from 'react';

function SubmitPaper() {
  const [paperData, setPaperData] = useState({
    title: '',
    authors: '',
    email: '',
    abstract: '',
    keywords: '',
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paper submitted:', paperData);
    // Here you would typically send the data to a server
  };

  return (
    <div style={styles.container}>
      <h1>Submit Your Paper</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Paper Title:</label>
          <input
            type="text"
            value={paperData.title}
            onChange={(e) => setPaperData({...paperData, title: e.target.value})}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label>Authors:</label>
          <input
            type="text"
            value={paperData.authors}
            onChange={(e) => setPaperData({...paperData, authors: e.target.value})}
            style={styles.input}
            placeholder="Separate multiple authors with commas"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label>Contact Email:</label>
          <input
            type="email"
            value={paperData.email}
            onChange={(e) => setPaperData({...paperData, email: e.target.value})}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label>Abstract:</label>
          <textarea
            value={paperData.abstract}
            onChange={(e) => setPaperData({...paperData, abstract: e.target.value})}
            style={styles.textarea}
            rows="4"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label>Keywords:</label>
          <input
            type="text"
            value={paperData.keywords}
            onChange={(e) => setPaperData({...paperData, keywords: e.target.value})}
            style={styles.input}
            placeholder="Separate keywords with commas"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label>Upload Paper (PDF):</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPaperData({...paperData, file: e.target.files[0]})}
            style={styles.fileInput}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit Paper
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  fileInput: {
    padding: '0.5rem 0',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  }
};

export default SubmitPaper;