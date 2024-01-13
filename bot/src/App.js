import React from 'react';
import ChatBot from 'react-simple-chatbot';

const App = () => {
  return (
    <>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What number I am thinking?',
            trigger: '2',
          },
          {
            id: '2',
            user: true, // This step expects user input
            trigger: 'checkNumber',
          },
          {
            id: 'checkNumber',
            options: [
              {
                value: 1,
                label: 'Number 1',
                trigger: '3',
              },
              {
                value: 2,
                label: 'Number 2',
                trigger: 'wrongAnswer',
              },
              {
                value: 3,
                label: 'Number 3',
                trigger: 'wrongAnswer',
              },
            ],
          },
          {
            id: 'wrongAnswer',
            message: 'Wrong answer, try again.',
            trigger: '2', // Go back to the user input step
          },
          {
            id: '3',
            message: 'Awesome! You are a telepath!',
            end: true,
          },
        ]}
        floating={true}
      />
    </>
  );
};

export default App;
