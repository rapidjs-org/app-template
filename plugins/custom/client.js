$this.PUBLIC.submit = query => {
    $this.endpoint({
        query
    })
    .then(res => {
        console.log(res);
    })
    .atch(err => {
        comsole.error(err);
    });
}