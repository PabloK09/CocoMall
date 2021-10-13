import axios from 'axios';
import Swal from 'sweetalert2';
import { DELETE_PRODUCT } from './constants';

export async function modalOptions(id, setEditState, setFlag, flag) {
    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                edit: 'Edit product',
                delete: 'Delete product',
            });
        }, 500);
    });

    const { value: action } = await Swal.fire({
        title: 'What would you like to do',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to choose something!';
            }
        },
    });

    if (action === 'edit') {
        setEditState(false);
    }

    if (action === 'delete') {
        const { value: accept } = await Swal.fire({
            input: 'checkbox',
            icon: 'warning',
            inputValue: 1,
            inputPlaceholder: 'Are you sure you want to delete this product',
            confirmButtonText: 'Delete',
            inputValidator: (result) => {
                return !result && 'You need to agree';
            },
        });

        if (accept) {
            axios
                .delete(`${DELETE_PRODUCT}/${id}`)
                .then(() => {
                    setFlag(!flag);
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully deleted',
                    });
                })
                .catch((err) =>
                    Swal.fire({
                        icon: 'error',
                        title: 'error',
                    }),
                );
        }
    }
}
