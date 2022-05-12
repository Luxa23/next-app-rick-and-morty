function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValues),
  });
}

export default function Form() {
  return (
    <form>
      <label name="name" type="text">
        Name:<input></input>
      </label>
      <label name="age" type="number">
        Age<input></input>
      </label>
      <button onSubmit={submitHandler}>Submit</button>
    </form>
  );
}
