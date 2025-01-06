export default function Semaine({ datas }) {
    return (
        <div>
            <h2>Affichage par semaine</h2>
            <table border="1">
                <thead>
                    <tr>
                    <td>Température</td>
                    <td>Pression</td>
                    <td>Humidité</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{datas.temp}</td>
                    <td>{datas.pression}</td>
                    <td>{datas.humidite}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}