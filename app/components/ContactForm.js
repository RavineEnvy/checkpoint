'use client'

import { useState, useRef, useEffect } from "react";

const ContactForm = ({ setContacts }) => {
    const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
    const [errors, setErrors] = useState({})
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const validate = () => {
        const newErrors = {};
        if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
        if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            newErrors.email = "Email inválido";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setContacts((prev) => [...prev, { ...form, id: Date.now() }]);
        setForm({ nome: "", email: "", telefone: "" });
        setErrors({});
        inputRef.current.focus()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nome *
                </label>
                <input
                    ref={inputRef}
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                {errors.nome && (
                    <p>{errors.nome}</p>
                )}
            </div>

            <div>
                <label>
                    Email *
                </label>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <p>{errors.email}</p>
                )}
            </div>

            <div>
                <label>
                    Telefone *
                </label>
                <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                />
                {errors.telefone && (
                    <p>{errors.telefone}</p>
                )}
            </div>

            <button type="submit">
                Adicionar Contato
            </button>
        </form>
    )
}

export default ContactForm