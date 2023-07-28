package com.iamneo.security.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.iamneo.security.entity.Payment;
import com.iamneo.security.repository.PaymentRepo;
@Service
public class PaymentService {
	@Autowired //extends another class
	PaymentRepo stRepo; //reference variable
	
	public Payment savepayment(Payment b) {
		return stRepo.save(b);
	}
	public List <Payment>getpay()

{
		return stRepo.findAll();
		
}
	public Payment Updatepayment(Payment e)
	{
		return stRepo.saveAndFlush(e);
	}
	
	public void deletePay (int id)
	{		
	
	    stRepo.deleteById(id);	
	
	}
}




