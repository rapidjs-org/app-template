module.exports = _ => {
    $this.clientModule("./client");

    $this.endpoint(body => {
        return (body.query == "pass") ? true : false;
    });
};