import ContactItem from "./ContactItem";
import EmptyState from "./ui/EmptyState";

const ContactList = ({ contacts, setContacts }) => {
    const handleRemove = (id) => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
    };

    return (<section>
        <div>
            <h2>
                Contatos ({contacts.length})
            </h2>
        </div>
        <ul>
            {contacts.length === 0 ? (
                <EmptyState message="Nenhum contato cadastrado ainda." />
            ) : (
                contacts.map((c) => (
                    <ContactItem key={c.id} contact={c} handleRemove={handleRemove} />
                ))
            )}
        </ul>
    </section>
    )
}

export default ContactList