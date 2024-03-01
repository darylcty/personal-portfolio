"use client"
import React from "react"

const ContactForm = () => {
    return (
    <div>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>
            <input type="text" name="name" required/>
            <input type="email" name="email" required/>
            <textarea name="message" required></textarea>
            <div className="h-captcha" data-captcha="true"></div>
            <button type="submit">Submit Form</button>
        </form>
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
    )
}

export default ContactForm