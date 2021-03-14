function TopButtons(props) {
    return (
        <div className="TopButtons">
            <button disabled={props.activeScreen === props.screens.menu} onClick={() => props.changeScreen(props.screens.menu)}>
                Cardápio
            </button>
            <button disabled={props.activeScreen === props.screens.admin} onClick={() => props.changeScreen(props.screens.admin)}>
                Admin
            </button>
        </div>
    );
}

export default TopButtons;