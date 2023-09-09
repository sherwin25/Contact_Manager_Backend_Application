//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ msg: "get all contacts" });
};

//@desc Get a contacts
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ msg: `get individual contact ${req.params.id}` });
};

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  res.status(201).json({ msg: "contact created" });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ msg: `updated contact for ${req.params.id}` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ msg: `deleted contact for ${req.params.id}` });
};
module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
