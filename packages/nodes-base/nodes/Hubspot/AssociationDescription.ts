import { INodeProperties } from 'n8n-workflow';

export const associationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['association'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new association',
				action: 'Create a association',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a association',
				action: 'Delete a association',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a association',
				action: 'Get a association',
			},
		],
		default: 'create',
	},
];

export const associationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                association:create                              */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Type Association',
		name: 'typeAssociation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['association'],
				operation: ['get', 'create', 'delete'],
			},
		},
		noDataExpression: true,
		options: [
			{
				name: 'Contact to Company',
				value: 1,
			},
			{
				name: 'Company to Contact',
				value: 2,
			},
			{
				name: 'Deal to Contact',
				value: 3,
			},
			{
				name: 'Contact to Deal',
				value: 4,
			},
			{
				name: 'Deal to Company',
				value: 5,
			},
			{
				name: 'Company to Deal',
				value: 6,
			},
			{
				name: 'Company to Engagement',
				value: 7,
			},
			{
				name: 'Engagement to Company',
				value: 8,
			},
			{
				name: 'Contact to Engagement',
				value: 9,
			},
			{
				name: 'Engagement to Contact',
				value: 10,
			},
			{
				name: 'Deal to Engagement',
				value: 11,
			},
			{
				name: 'Engagement to Deal',
				value: 12,
			},
			/* 	{
				name: 'Parent Company to Child Company',
				value: 13,
			},
			{
				name: 'Child Company to Parent Company',
				value: 14,
			}, */
			{
				name: 'Contact to Ticket',
				value: 15,
			},
			{
				name: 'Ticket to Contact',
				value: 16,
			},
			{
				name: 'Ticket to Engagement',
				value: 17,
			},
			{
				name: 'Engagement to Ticket',
				value: 18,
			},
			{
				name: 'Deal to Line Item',
				value: 19,
			},
			{
				name: 'Line Item to Deal',
				value: 20,
			},
			{
				name: 'Company to Ticket',
				value: 25,
			},
			{
				name: 'Ticket to Company',
				value: 26,
			},
			{
				name: 'Deal to Ticket',
				value: 27,
			},
			{
				name: 'Ticket to Deal',
				value: 28,
			},
		],
		default: 1,
		required: true,
		description:
			'Asociation From Object To object <a href="https://legacydocs.hubspot.com/docs/methods/crm-associations/crm-associations-overview">Link</a>',
	},
	{
		displayName: 'ID To Object Association',
		name: 'idToAssociation',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['association'],
				operation: ['create', 'delete'],
			},
		},
		typeOptions: {
			minValue: 0,
		},
		default: 0,
		required: true,
		description: 'ID To Association Object',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 association:get                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID From Object Association',
		name: 'idFromAssociation',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['association'],
				operation: ['get', 'create', 'delete'],
			},
		},
		typeOptions: {
			minValue: 0,
		},
		default: 0,
		required: true,
		description: 'ID From Association Object',
	},

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['association'],
				operation: ['get'],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 100,
		description: 'Max number of results to return',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 contact:delete                             */
	/* -------------------------------------------------------------------------- */
];
