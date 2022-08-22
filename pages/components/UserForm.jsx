import { Input } from 'antd';
import styles from "../../styles/styledComponents/UserForm.module.css"

export function UserEditForm() {

    return (
        <form className={styles.userForm}>
            <h2 className={styles.formTitle}>Edite usuário</h2>
            <label>Edit User</label>
            <Input />
        </form>
    )
}

export function UserRegisterForm() {

    return (
        <form className={styles.userForm}>
            <h2 className={styles.formTitle}>Cadastre usuário</h2>
            <label className={styles.label}>Cad User</label>
            <Input className={styles.input} />
        </form>
    )
}