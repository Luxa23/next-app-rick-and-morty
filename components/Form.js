async function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  try {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default function Form() {
  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Age
        <input type="number" name="age" />
      </label>
      <button>Submit</button>
    </form>
  );
}
