

export default function Form() {


    return (
        <form action="">
            <label htmlFor="">Selecione o Cliente: </label>
            <select name="client" className='form-select form-select-lg mb-3' aria-label=".form-select-lg example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </form>
    )
}