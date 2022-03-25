import "../styles/Components/_contactform.scss"

const ContactForm = () => {
    return (
        <form target="_blank" action="https://formsubmit.co/saviacerveza@gmail.com" method="POST">
            <label htmlFor="nameAndLastName">Nombre y Apellido:</label><br />
            <input type="text" id="nameAndLastName" name="Nombre y apellido"/><br />
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="Email"/><br />
            <label htmlFor="message">Mensaje:</label><br />
            <textarea name="Mensaje" id="message" cols="30" rows="10"></textarea>
            <input type="submit" id="submit" value="ENVIAR" className="submit-disabled"/>
        </form>
    )
}

export default ContactForm;