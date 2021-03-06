import { Decimal } from 'decimal.js';
import { Timestamp, EnumItem, BinaryTypeStorage } from "../internal";
export declare class BinaryCommunicator {
    private _socket;
    private _typeStorage;
    constructor(socket: any);
    static readString(buffer: any): any;
    static writeString(buffer: any, value: any): void;
    send(opCode: any, payloadWriter: any, payloadReader?: any): Promise<void>;
    get typeStorage(): BinaryTypeStorage;
    readObject(buffer: any, expectedType?: any): any;
    readStringArray(buffer: any): Promise<any>;
    writeObject(buffer: any, object: any, objectType?: any, writeObjectType?: boolean): Promise<void>;
    _readTypedObject(buffer: any, objectTypeCode: any, expectedType?: any): any;
    _readUUID(buffer: any): any[];
    _readEnum(buffer: any): Promise<EnumItem>;
    _readDecimal(buffer: any): Decimal;
    _readTimestamp(buffer: any): Timestamp;
    _readArray(buffer: any, arrayTypeCode: any, arrayType: any): Promise<any[]>;
    _readMap(buffer: any, expectedMapType: any): Promise<Map<any, any>>;
    _readCollection(buffer: any, expectedColType: any): Promise<any>;
    _readBinaryObject(buffer: any, expectedType: any): any;
    _readComplexObject(buffer: any, expectedType: any): Promise<any>;
    _writeUUID(buffer: any, value: any): void;
    _writeEnum(buffer: any, enumValue: any): Promise<void>;
    _writeDecimal(buffer: any, decimal: any): void;
    _writeTimestamp(buffer: any, timestamp: any): void;
    _writeTime(buffer: any, time: any): void;
    _writeArray(buffer: any, array: any, arrayType: any, arrayTypeCode: any): Promise<void>;
    _writeCollection(buffer: any, collection: any, collectionType: any): Promise<void>;
    _writeMap(buffer: any, map: any, mapType: any): Promise<void>;
    _writeBinaryObject(buffer: any, binaryObject: any): Promise<void>;
    _writeComplexObject(buffer: any, object: any, objectType: any): Promise<void>;
}
