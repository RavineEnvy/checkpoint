import Link from "next/link"

const ContactItem = ({ contact, handleRemove, ...props }) => {
    const detailUrl = `/contact/${contact.id}?nome=${encodeURIComponent(contact.nome)}&email=${encodeURIComponent(contact.email)}&telefone=${encodeURIComponent(contact.telefone)}`;

    return (
        <li {...props}>
            <div>
                <Link href={detailUrl}>
                    {contact.nome}
                </Link>
                <p>
                    {contact.email} • Telefone: {contact.telefone}
                </p>
            </div>
            <button onClick={() => handleRemove(contact.id)}>
                Excluir
            </button>
        </li>
    )
}

export default ContactItem