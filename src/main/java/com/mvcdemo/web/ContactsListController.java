package com.mvcdemo.web;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mvcdemo.domain.Contact;
import com.mvcdemo.service.ContactService;

@Controller
public class ContactsListController {

	
	private ContactService contactService;
	
	@Autowired
	public void setContactService(ContactService contactService){
		this.contactService = contactService;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public @ResponseBody
	List<Contact> getContacts()
			throws Exception {

		List<Contact> contacts = contactService.listContacts();
		return contacts;
	}

	@RequestMapping(value = "/list/{contactId}", method = RequestMethod.PUT)
	public @ResponseBody
	Contact editContact(@PathVariable String contactId,
			@RequestBody Contact contact, HttpServletResponse response)
			throws Exception {

		contactService.updateContact(contact);

		return contact;
	}

	@RequestMapping(value = "/list/{contactId}", method = RequestMethod.DELETE)
	public void deleteContact(@PathVariable Integer contactId, Model model,
			HttpServletResponse response) throws Exception {

		contactService.removeContact(contactId);
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST)
	public @ResponseBody
	Contact saveContact(@RequestBody Contact contact,
			HttpServletResponse response) throws Exception {

		contactService.addContact(contact);

		return contact;
	}
}
