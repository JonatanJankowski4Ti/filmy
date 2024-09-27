import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="film" class="form-label">Tytuł filmu</label>
          <input type="text" class="form-control" id="film" />
          </div>
         <select name="Rodzaj">
          <option value="1"> Komedia</option>
          <option value="2"> Obyczajowy </option>
          <option value="3"> Sensacyjny </option>
          <option value="4"> Horror </option>
         </select>
         <button type="button">Dodaj</button>
    </form>
    </div>
     );
}

export default App;
