const { prepare, mockDb } = require("../util/app_test2");
const controller = require("./user");

describe("/user", () => {
	describe("GET /user", () => {
		it("basic case", async () => {
			mockDb("User", [{ email: "omg", password: "omg" }]);
			var res = await prepare(controller).get("/");
			expect(res.status).toBe(200);
			expect(res.body[0].email).toBe("omg");
			expect(res.body[0].password).toBe("omg");
		});
		it('400 "no_user"', async () => {
			mockDb("User", []);
			var res = await prepare(controller).get("/");
			expect(res.status).toBe(400);
			expect(res.body.error).toBe("no_user");
		});
	});
});
