package com.mvcdemo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvcdemo.dao.ContactDAO;
import com.mvcdemo.domain.Contact;
import com.mvcdemo.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactDAO contactDAO;

	@Transactional
	public List<Contact> listContacts() {
		return contactDAO.listContact();
	}

	@Transactional
	public void addContact(Contact contact) {
		contactDAO.addContact(contact);
	}

	@Transactional
	public void removeContact(Integer id) {
		contactDAO.removeContact(id);
	}

	@Transactional
	public void updateContact(Contact contact) {
		contactDAO.updateContact(contact);
	}

}
