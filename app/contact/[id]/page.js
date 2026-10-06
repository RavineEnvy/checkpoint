"use client";

import { useParams, useRouter, useSearchParams } from 'next/navigation';

const ContactDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();


    const contact = {
        id: parseInt(params.id),
        nome: searchParams.get('nome'),
        email: searchParams.get('email'),
        telefone: searchParams.get('telefone'),
    };

    return (
        <div>
            <div>
                <div>

                    <div>
                        <h1>
                            Detalhes do Contato
                        </h1>
                        <button onClick={() => router.back()}>
                            Voltar
                        </button>
                    </div>

                    <div>
                        <div>
                            <label>
                                Nome
                            </label>
                            <p>{contact.nome}</p>
                        </div>

                        <div>
                            <label>
                                Email
                            </label>
                            <p >{contact.email || "—"}</p>
                        </div>

                        <div>
                            <label>
                                Telefone
                            </label>
                            <p>{contact.telefone || "—"}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactDetailPage;