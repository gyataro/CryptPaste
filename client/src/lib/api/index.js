function postPaste() {
    return new Promise((resolve, reject) => {
        await self.fetch('https://api.github.com/users?per_page=5');
    })
}