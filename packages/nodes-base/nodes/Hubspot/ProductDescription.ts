import { INodeProperties } from 'n8n-workflow';

export const productOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['product'],
			},
		},
		options: [
			{
				name: 'Create or Update',
				value: 'upsert',
				description: 'Create a new record, or update the current one if it already exists (upsert)',
				action: 'Create or update a product',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a product',
				action: 'Delete a product',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a product',
				action: 'Get a product',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many products',
				action: 'Get many products',
			},
		],
		default: 'upsert',
	},
];

export const productFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                product:upsert                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'SKU Product ID',
		name: 'sku',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['upsert'],
			},
		},
		default: '',
		options: [],
		description:
			'The sku is required when creating a product. See the CRM Pipelines API for details on managing pipelines and stages. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['upsert'],
			},
		},
		default: '',
		description: 'Name Product',
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberStepSize: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['upsert'],
			},
		},
		default: 0,
		description: 'Price Product',
	},

	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['upsert'],
			},
		},
		options: [
			{
				displayName: 'Description Product',
				name: 'descriptionProduct',
				type: 'string',
				description: 'Write a description Product',
				default: '',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                 product:getAll                                */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Archived',
		name: 'archived',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getAll'],
			},
		},

		default: false,
		description: 'Whether archived results to return',
	},
	/* -------------------------------------------------------------------------- */
	/*                                  product:get                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Unique identifier for a particular product',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 product:delete                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'Unique identifier for a particular product',
	},
];
