import "../styles/Components/_contactform.scss"

const ContactForm = () => {
    return (
        <form>
            <label htmlFor="nameAndLastName">Nombre y Apellido:</label><br />
            <input type="text" id="nameAndLastName"/><br />
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email"/><br />
            <label htmlFor="message">Mensaje:</label><br />
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" name="submit" id="submit" value="ENVIAR" disabled 
                className="submit-disabled"
            />
        </form>
    )
}

export default ContactForm;