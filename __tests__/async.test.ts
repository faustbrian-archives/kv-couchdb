import { complianceTestsAsync } from "@konceiver/kv-test-suite";
import { StoreAsync } from "../src";

complianceTestsAsync(() => StoreAsync.new<string, number>({ connection: "http://localhost:5984", database: "alice" }), {
	one: 1,
	two: 2,
	// tslint:disable-next-line: object-literal-sort-keys
	three: 3,
	four: 4,
	five: 5,
});
