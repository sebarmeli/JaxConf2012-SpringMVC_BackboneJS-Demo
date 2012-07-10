package com.mvcdemo.service;

import java.util.List;

import com.mvcdemo.domain.Contact;

public interface ContactService {

	public List<Contact> listContacts();

	public void addContact(Contact contact);
	
	public void removeContact(Integer id);

	public void updateContact(Contact contact);
	
}
