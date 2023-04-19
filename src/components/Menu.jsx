import MenuItem from "./MenuItem"

export default function Menu({ menuStyle, menuItem }) {
    return (
        <div style={ menuStyle}>
            <h2>This is a menu</h2>
            <ul>
                <MenuItem menuItem = { menuItem } label ="This is option 1 "/>
                <MenuItem menuItem = { menuItem } label ="This is option 2 "/>
                <MenuItem menuItem = { menuItem } label ="This is option 3 "/>
                <MenuItem menuItem = { menuItem } label ="This is option 4 "/>
            </ul>
        </div>
    )
}