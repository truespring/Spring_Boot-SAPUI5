package com.todo.spring.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TodoController {

	@RequestMapping("/index3")
	public JSONObject jsonObject() {
		System.out.println("index 이동");
		 String jsonText =  "{\"isMarried\":false,\"address\":null,\"name\":\"kim\",\"age\":19}";
         
         JSONParser parser = new JSONParser();
         
         JSONObject obj = null;
         
         try {
              obj = (JSONObject)parser.parse(jsonText);
         } catch (ParseException e) {
              System.out.println("변환에 실패");
              e.printStackTrace();
         }
         
         System.out.println(obj.getClass().getName());
         System.out.println(obj.get("name"));
         System.out.println(obj.get("isMarried"));


		return obj;
	}
	
	@GetMapping("/index2")
	public JSONObject jsonObject2() {
		System.out.println("index 이동");
		JSONObject jsonObject = new JSONObject();
		
        JSONObject data = new JSONObject();
        data.put("BANK_CD", "088");
        data.put("SEARCH_ACCT_NO", "1231231234");
        data.put("ACNM_NO", "123456");
        data.put("ICHE_AMT", "0");
        data.put("TRSC_SEQ_NO", "0000001");
        
        JSONArray req_array = new JSONArray();
        req_array.add(data);
        
        jsonObject.put("REQ_DATA", req_array);

		return jsonObject;
	}
}
