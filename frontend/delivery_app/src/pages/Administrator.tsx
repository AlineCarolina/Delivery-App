import { useEffect, useState } from "react";
import Header from "../componets/Header";
import { deleteData, postData, requestData } from "../services/requests";

const roles = [
        { name: 'Vendedor', role: 'seller' },
        { name: 'Cliente', role: 'customer' },
        { name: 'Adiministrador', role: 'administrator' },
    ];

    const defaultForm = {
        password: '',
        email: '',
        name: '',
        role: roles[0].role,
    };

function Administrator() {
    const [registerForm, setRegisterForm] = useState(defaultForm);
    const [users, setUsers] = useState([]);
    const [errorRegister, setErrorRegister] = useState(false);

    useEffect(() => {
        requestData("/users").then((data) => setUsers(data))
        console.log(users);
    }, []);

    const handleChange = ({ value, name }: any) => {
        setRegisterForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRegister = async () => {
        setErrorRegister(false);
        try {
            await postData("/register", registerForm);
        } catch (_) {
            setErrorRegister(true);
        }
        requestData("/users").then((data) => setUsers(data));
        setRegisterForm(defaultForm);
    };

    const deleteUser = async (id: number) => {
        await deleteData(`/users/${id}`);
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <>
            <Header/>
            <main>
                <label htmlFor="name">
                    <h3>Nome</h3>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        value={ registerForm.name }
                        onChange={ (e) => handleChange(e.target) }
                    />
                </label>
                <label htmlFor="email">
                    <h3>Email</h3>
                    <input
                        name="email"
                        id="email"
                        type="text"
                        value={ registerForm.email }
                        onChange={ (e) => handleChange(e.target) }
                    />
                </label>
                <label htmlFor="password">
                    <h3>Senha</h3>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="******"
                        value={ registerForm.password }
                        onChange={ (e) => handleChange(e.target) }
                    />
                </label>
                <label htmlFor="role">
                    <h3>Tipo</h3>
                    <select
                        onChange={ (ev) => handleChange(ev.target) }
                        name="role"
                        id="role"
                    >
                        {roles.map(({ name, role }) => (
                            <option key={ name } value={ role }>{ name }</option>))}
                    </select>
                </label>
                <button
                    type="button"
                    onClick={ () => handleRegister() }
                >
                    Cadastrar
                </button>
                { errorRegister && (
                    <p>
                    Usuario já existe
                    </p>
                )}
                <div>
                    <h2>Lista de Usuarios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Tipo</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users && users.map((user, index) => (
                            <tr key={ user.id }>
                            <td>
                                { index + 1 }
                            </td>
                            <td>
                                { user.name }
                            </td>
                            <td>
                                { user.email }
                            </td>
                            <td>
                                { user.role }
                            </td>
                            <td>
                                <button
                                type="button"
                                onClick={ () => deleteUser(user.id) }
                                >
                                Excluir
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default Administrator;