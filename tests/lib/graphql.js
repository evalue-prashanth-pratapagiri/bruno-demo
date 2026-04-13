function assertSuccess(res) {
  expect(res.status).to.equal(200);
  expect(res.body.errors).to.be.undefined;
}

function assertUserShape(user, { id, name, email } = {}) {
  expect(user).to.not.be.null;
  if (id !== undefined)    expect(user.id).to.equal(id);
  if (name !== undefined)  expect(user.name).to.equal(name);
  if (email !== undefined) expect(user.email).to.equal(email);
}

module.exports = { assertSuccess, assertUserShape };
