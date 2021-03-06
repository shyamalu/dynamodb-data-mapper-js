import {ItemNotFoundException} from "./ItemNotFoundException";
import {GetItemInput} from "aws-sdk/clients/dynamodb";

describe('ItemNotFoundException', () => {
    it('should include the request sent as part of the error', () => {
        const getItemInput: GetItemInput = {
            TableName: 'foo',
            Key: {
                fizz: {S: 'buzz'},
            },
        };

        const exception = new ItemNotFoundException(getItemInput, 'message');
        expect(exception.message).toBe('message');
        expect(exception.itemSought).toBe(getItemInput);
    });
});
