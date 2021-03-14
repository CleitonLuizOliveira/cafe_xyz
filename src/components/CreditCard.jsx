
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function CreditCard(props) {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});

	const handleInputChange = (e, length) => {
		setData({
			...data,
			[e.target.name]: e.target.value.slice(0, length)
		});
	};

    function closeOrder(event) {
        event.preventDefault();
		props.sendOrder();
    }

	return (
		<div className="CreditCard">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form onSubmit={(event) => closeOrder(event)}>
                <input
                    value={data.number}
					type="number"
					name="number"
					placeholder="Número do Cartão"
					onChange={e => handleInputChange(e, 16)}
                    required
				/>
				<input
					type="text"
					name="name"
					placeholder="Seu Nome"
					onChange={handleInputChange}
                    required
				/>
                <input
					type="date"
					name="expiry"
					placeholder="Validade"
					onChange={handleInputChange}
                    required
				/>
                <input
                    value={data.cvc}
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={e => handleInputChange(e, 3)}
                    required
				/>
                <button type="submit">Fechar Pedido</button>
			</form>
		</div>
	);
};

export default CreditCard;