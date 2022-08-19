import { Input } from 'antd';
import styles from "../../styles/styledComponents/UserForm.module.css"

export function UserEditForm() {

    return (
        <form className={styles.userForm}>
            <h2>Edite usuário</h2>
            <label>Edit User</label>
            <Input></Input>
        </form>
    )
}

export function UserRegisterForm() {

    return (
        <form className={styles.userForm}>
            <h2>Cadastre usuário</h2>
            <label>Cad User</label>
            <Input></Input>
        </form>
    )
}