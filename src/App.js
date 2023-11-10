
import { useState } from 'react';
import './App.css';
import FeedbackItem from './component/FeedbackItem';
import Header from './component/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback= (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
    <Header text="Feedback UI" />
    <div className='container'>
      <FeedbackForm />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback} />
    </div>
     
    </>
  );
}

export default App;
