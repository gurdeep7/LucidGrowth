import React from 'react';

interface SslInfoProps {
  sslInfo: {
    valid: boolean;
    expirationDate: string;
    issuer: string;
    subject: string;
    validForDomain: boolean;
    caValid: boolean;
    selfSigned: boolean;
    revoked: boolean;
  };
}

const SslInfo: React.FC<SslInfoProps> = ({ sslInfo }) => (
  <div className="mt-4">
    <p className="text-lg"><strong>Validity:</strong> {sslInfo.valid ? 'Valid' : 'Invalid'}</p>
    <p className="text-lg"><strong>Expiration Date:</strong> {sslInfo.expirationDate}</p>
    <p className="text-lg"><strong>Issuer:</strong> {sslInfo.issuer}</p>
    <p className="text-lg"><strong>Subject:</strong> {sslInfo.subject}</p>
    <p className="text-lg"><strong>Valid for Domain:</strong> {sslInfo.validForDomain ? 'Yes' : 'No'}</p>
    <p className="text-lg"><strong>CA Validity:</strong> {sslInfo.caValid ? 'Valid' : 'Invalid'}</p>
    <p className="text-lg"><strong>Self-Signed:</strong> {sslInfo.selfSigned ? 'Yes' : 'No'}</p>
    <p className="text-lg"><strong>Revocation Status:</strong> {sslInfo.revoked ? 'Revoked' : 'Not Revoked'}</p>
  </div>
);

export default SslInfo;
