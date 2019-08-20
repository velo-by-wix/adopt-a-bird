import { ok, badRequest, created } from 'wix-http-functions';
import { adoptACorvid } from 'backend/adopt';
import wixData from 'wix-data';

export function get_list(request) {
	const response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};
	return wixData.query("CorvidBirds")
		.include("adopter")
		.find()
		.then(results => {
			response.body = {
				corvids: results.items
			}
			return ok(response)
		})
}

export function post_adopt(request) {
	let response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};
	return request.body.json()
		.then(body => {
			adoptACorvid(body.adopter, body.corvidId)
				.then(results => {
					response.body = {
						"inserted": results
					}
					return created(response)
				})
				.catch(error => {
					return badRequest(error)
				})
		})
}