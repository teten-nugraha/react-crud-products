import React, {useState} from "react";
import { Button, Form} from "semantic-ui-react";
import axios from "axios";

export default function Create() {

    const [kodeBarang, setKodeBarang]   = useState('');
    const [namaBarang, setNamaBarang]   = useState('');
    const [supplier, setSupplier]       = useState('');
    const [stok, setStok]               = useState('');

    const payload = {
        kode_barang: kodeBarang,
        nama: namaBarang,
        supplier: supplier,
        stok:stok
    }

    const postData = () => {
        axios.post(`128.199.169.28:4000/api/v1/products`, payload)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
        })
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>Kode Barang</label>
                <input
                    placeholder="Kode Barang"
                    onChange={(e) => setKodeBarang(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Nama Barang</label>
                <input
                    placeholder="Nama Barang"
                    onChange={(e) => setNamaBarang(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Supplier</label>
                <input
                    placeholder="Supplier"
                    onChange={(e) => setSupplier(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Stok</label>
                <input
                    placeholder="Stok"
                    onChange={(e) => setStok(e.target.value)}
                />
            </Form.Field>
            <Button
                type="submit"
                onClick={postData}
            >Submit</Button>
        </Form>
    );
};