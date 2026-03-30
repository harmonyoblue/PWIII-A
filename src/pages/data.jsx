import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getItems, addItem, removeItem } from '../lib/db'
import './App.css'

function DataPage() {
    const [items, setItems] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        setItems(getItems())
    }, [])

    function onAddItem(event) {
        event.preventDefault()
        const value = text.trim()
        if (!value) return

        const new_item = addItem({ text: value })
        setItems(previous_list => [new_item, ...previous_list])
        setText('')
    }

    function onRemoveItem(item_id) {
        removeItem(item_id)
        setItems(previous_list => previous_list.filter(i => i.id !== item_id))
    }

    return (
        <>
            <h1>Dados (localStorage)</h1>
            <form onSubmit={onAddItem} style={{ marginBottom: 12 }}>
                <input value={text} onChange={e => setText(e.target.value)} placeholder="Novo item" />
                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {items.map(item => (
                    <li
                        key={item.id}
                        style={{ marginBottom: 6 }}
                    >
                        {item.text}
                        <button
                            onClick={() => onRemoveItem(item.id)}
                            style={{ marginLeft: 12 }}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>

            <p>
                <Link to="/">Voltar para Início</Link>
            </p>
        </>
    )
}

export default DataPage
