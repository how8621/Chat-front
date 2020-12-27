import { TestBed } from '@angular/core/testing';

import { WebSocketService } from './web-socket.service';

describe('WebSocketService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    xit('should be created', () => {
        const service: WebSocketService = TestBed.get(WebSocketService);
        expect(service).toBeTruthy();
    });
});
