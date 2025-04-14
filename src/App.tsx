import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";
import I18n from './i18n';



const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { user, signOut } = useAuthenticator();
  const [lang, setLang] = useState('he');


  useEffect(() => {
    document.documentElement.dir = I18n.get('Lang') === 'he' ? 'rtl' : 'ltr';
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    console.log("set lang", lang);
    I18n.setLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'he' : 'en'));
    console.log("set lang", lang, I18n.get('Sign Out'));
    I18n.setLanguage(lang);
  };

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
  
  function deleteTodo(id: string) { // add delete ToDo function
    client.models.Todo.delete({ id })
 }

  return (
    <Authenticator >
    <main>
    <header>
          <h1>{I18n.get('Welcome')}</h1>
    </header>       
    <h1>{user?.signInDetails?.loginId}'s todos</h1>
    <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>{I18n.get('Sign Out')}</button>
      <button onClick={toggleLanguage}>{I18n.get('Change Language')}</button>
    <footer>
      <p>© {I18n.get('Copyright')}</p>
    </footer>
    </main>
    </Authenticator>
  );
}
export default App;
