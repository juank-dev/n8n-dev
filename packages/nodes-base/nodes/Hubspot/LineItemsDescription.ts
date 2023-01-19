import { INodeProperties } from 'n8n-workflow';

export const lineItemsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new Line Item',
				action: 'Create a Line Items',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a Line Item',
				action: 'Delete a Line Items',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a Line Items',
				action: 'Get a Line Items',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many Line Items',
				action: 'Get many Line Items',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a new Line Item',
				action: 'Update a Line Items',
			},
		],
		default: 'create',
	},
];

export const lineItemsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                lineItems:create - update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name Line Item',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['create', 'update'],
			},
		},
		default: '',
		description: 'Write a Name Line Item',
	},
	{
		displayName: 'ID Line Item',
		name: 'idLineItem',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Write an ID Line Item',
	},
	{
		displayName: 'ID Association Product',
		name: 'hs_product_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['create', 'update'],
			},
		},
		default: '',
		description: 'Write an ID Association Product',
	},
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['create', 'update'],
			},
		},
		typeOptions: {
			minValue: 0,
			numberStepSize: 1,
		},
		default: 0,
		description: 'Quantity products for this Line Items',
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberStepSize: 1,
		},
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['create', 'update'],
			},
		},
		default: 0,
		description: 'Price Line Items',
	},

	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['create', 'update'],
			},
		},
		options: [
			{
				displayName: 'Tax',
				name: 'tax',
				type: 'number',
				description: 'Tax of Line Item',
				default: 0,
			},
			{
				displayName: 'Discount',
				name: 'discount_value',
				type: 'number',
				description: 'Discount of Line Item',
				default: 0,
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                 lineItems:getAll                                */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['lineItems'],
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
				resource: ['lineItems'],
				operation: ['getAll'],
			},
		},

		default: false,
		description: 'Whether archived results to return',
	},
	/* -------------------------------------------------------------------------- */
	/*                                  lineItems:get                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Line Item ID',
		name: 'lineItemId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Unique identifier for a particular Line Item',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 product:delete                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Line Item ID',
		name: 'lineItemId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lineItems'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'Unique identifier for a particular Line Item',
	},
];
