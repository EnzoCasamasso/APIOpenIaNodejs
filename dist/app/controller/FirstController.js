import { completion } from "../../services/openia.js";
class FirstController {
    home(req, res) {
        const openIa = completion.data.choices[0].text;
        return res.json({
            response: openIa
        });
    }
}
export const firstController = new FirstController();
//# sourceMappingURL=FirstController.js.map