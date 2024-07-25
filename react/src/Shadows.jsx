export const Shadows = () => {
    const styles = {
        padding: 5,
        marginTop: 15,
        boxShadow: '0 21px 6px 0 rgba(225, 0, 0, 0.00), 0 14px 5px 0 rgba(50, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 100, 0, 0.05), 0 3px 3px 0 rgba(0, 100, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 100, 0.10)'
    }

    return Array.from({ length: 1000 }).map((_, index) => (
        <div key={index} style={styles}>{index}</div>
    ))
}