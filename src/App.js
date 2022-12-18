import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState : {errors}, reset } = useForm()

  const onSubmit = (data) => {
    alert(`Your name ${data.name}`)
    console.log(data)
    reset()
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...(register('name', {
            required : "Name is requerd"
          }))}
          type="text"
        />
        {errors?.name && <div style={{color : "red"}}>{errors.name.message}</div>}

        <input
          {...(register('email', {
            required : "Email is requerd",
            pattern : {
              value : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message : 'Plase enter Valid email'
            }
          }))}
          type="text"
        />
        {errors?.email && <div style={{color : "red"}}>{errors.email.message}</div>}

        <div><button>send</button></div>
      </form>
    </div>
  );
}

export default App;
