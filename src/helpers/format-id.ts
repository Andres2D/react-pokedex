const fomatId = (id: number) => {
    return ('00' + id).slice(-3);
}

export default fomatId;
